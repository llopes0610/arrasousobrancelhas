"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

type Service = {
  value: string;
  label: string;
  duration: number;
};

type Slot = {
  start: string;
  end?: string;
};

const services: Service[] = [
  {
    value: "design-sobrancelhas",
    label: "Design de Sobrancelhas",
    duration: 30,
  },
  {
    value: "design-henna",
    label: "Design + Henna",
    duration: 40,
  },
  {
    value: "micropigmentacao",
    label: "Micropigmentação",
    duration: 90,
  },
  {
    value: "limpeza-pele",
    label: "Limpeza de Pele",
    duration: 50,
  },
  {
    value: "depilacao-facial",
    label: "Depilação Facial",
    duration: 40,
  },
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [booking, setBooking] = useState(false);

  const [success, setSuccess] = useState(false);
  const [bookingResult, setBookingResult] = useState<any>(null);

  const [error, setError] = useState("");

  const selectedService = useMemo(() => {
    return services.find(
      (service) => service.value === formData.service
    );
  }, [formData.service]);

  /**
   * Consulta os horários disponíveis
   */
  useEffect(() => {
    if (!formData.service || !formData.date) {
      setSlots([]);
      return;
    }

    loadAvailableSlots();
  }, [formData.service, formData.date]);

  async function loadAvailableSlots() {
    try {
      setLoadingSlots(true);
      setError("");
      setSlots([]);

      /**
       * Criamos o intervalo do dia selecionado.
       */
      const start = `${formData.date}T00:00:00`;

      const date = new Date(`${formData.date}T00:00:00`);

      date.setDate(date.getDate() + 1);

      const end = date.toISOString().split("T")[0] + "T00:00:00";

      const params = new URLSearchParams({
        eventTypeSlug: formData.service,
        start,
        end,
      });

      const response = await fetch(
        `/api/cal/slots?${params.toString()}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Não foi possível carregar os horários."
        );
      }

      /**
       * O Cal retorna:
       *
       * {
       *   "2026-08-10": [
       *      { start: "..." },
       *      { start: "..." }
       *   ]
       * }
       */

      const daySlots = data.data?.[formData.date] || [];

      setSlots(daySlots);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Erro ao carregar horários."
      );
    } finally {
      setLoadingSlots(false);
    }
  }

  function formatSlotTime(dateString: string) {
    return new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  }

  function formatBookingDate(dateString: string) {
    return new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      dateStyle: "full",
    }).format(new Date(dateString));
  }

  function formatPhone(value: string) {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }

    return value;
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setBooking(true);

    try {
      const selectedSlot = slots.find(
        (slot) =>
          formatSlotTime(slot.start) === formData.time
      );

      if (!selectedSlot) {
        throw new Error(
          "Esse horário não está mais disponível. Atualize os horários e tente novamente."
        );
      }

      const response = await fetch("/api/cal/bookings", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          service: selectedService?.label,
          eventTypeSlug: formData.service,
          start: selectedSlot.start,
          notes: formData.notes,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Não foi possível concluir o agendamento."
        );
      }

      setBookingResult(data.booking);
      setSuccess(true);

      /**
       * Atualiza os horários depois do agendamento.
       */
      await loadAvailableSlots();
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Erro ao realizar agendamento."
      );
    } finally {
      setBooking(false);
    }
  }

  function resetForm() {
    setFormData({
      name: "",
      whatsapp: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });

    setSlots([]);
    setSuccess(false);
    setBookingResult(null);
    setError("");
  }

  const isFormValid =
    formData.name.trim() &&
    formData.whatsapp.trim() &&
    formData.service &&
    formData.date &&
    formData.time;

  /**
   * Data mínima = hoje.
   */
  const today = new Date();

  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  if (success) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
          <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-600" />

          <h2 className="text-2xl font-semibold text-green-900">
            Agendamento confirmado!
          </h2>

          <p className="mt-2 text-green-800">
            Seu horário foi reservado com sucesso na
            agenda do Arrasou Sobrancelhas.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Cliente
            </p>

            <p className="font-medium">
              {formData.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Serviço
            </p>

            <p className="font-medium">
              {selectedService?.label}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Data
            </p>

            <p className="font-medium capitalize">
              {formatBookingDate(
                `${formData.date}T12:00:00`
              )}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Horário
            </p>

            <p className="font-medium">
              {formData.time}
            </p>
          </div>

          {bookingResult?.uid && (
            <div>
              <p className="text-sm text-gray-500">
                Código do agendamento
              </p>

              <p className="font-mono text-sm break-all">
                {bookingResult.uid}
              </p>
            </div>
          )}
        </div>

        <Button
          type="button"
          onClick={resetForm}
          className="w-full py-6"
        >
          Fazer outro agendamento
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* NOME */}
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="flex items-center gap-2"
        >
          <User className="h-4 w-4 text-arrasou-400" />
          Nome Completo *
        </Label>

        <Input
          id="name"
          required
          placeholder="Digite seu nome"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      </div>

      {/* WHATSAPP */}
      <div className="space-y-2">
        <Label
          htmlFor="whatsapp"
          className="flex items-center gap-2"
        >
          <Phone className="h-4 w-4 text-arrasou-400" />
          WhatsApp *
        </Label>

        <Input
          id="whatsapp"
          required
          type="tel"
          placeholder="(11) 99999-9999"
          value={formData.whatsapp}
          onChange={(e) =>
            setFormData({
              ...formData,
              whatsapp: formatPhone(e.target.value),
            })
          }
        />
      </div>

      {/* SERVIÇO */}
      <div className="space-y-2">
        <Label htmlFor="service">
          Serviço Desejado *
        </Label>

        <Select
          value={formData.service}
          onValueChange={(value) =>
            setFormData({
              ...formData,
              service: value,
              date: "",
              time: "",
            })
          }
        >
          <SelectTrigger id="service">
            <SelectValue placeholder="Selecione o serviço" />
          </SelectTrigger>

          <SelectContent>
            {services.map((service) => (
              <SelectItem
                key={service.value}
                value={service.value}
              >
                {service.label} — {service.duration} min
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* DATA */}
      <div className="space-y-2">
        <Label
          htmlFor="date"
          className="flex items-center gap-2"
        >
          <Calendar className="h-4 w-4 text-arrasou-400" />
          Escolha a data *
        </Label>

        <Input
          id="date"
          required
          type="date"
          min={minDate}
          value={formData.date}
          disabled={!formData.service}
          onChange={(e) =>
            setFormData({
              ...formData,
              date: e.target.value,
              time: "",
            })
          }
        />
      </div>

      {/* HORÁRIOS */}
      {formData.date && formData.service && (
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-arrasou-400" />
            Escolha o horário *
          </Label>

          {loadingSlots && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Consultando horários disponíveis...
            </div>
          )}

          {!loadingSlots && slots.length === 0 && !error && (
            <div className="rounded-xl border bg-gray-50 p-4 text-sm text-gray-600">
              Não existem horários disponíveis para essa data.
              <br />
              Escolha outra data.
            </div>
          )}

          {!loadingSlots && slots.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {slots.map((slot) => {
                const time = formatSlotTime(slot.start);

                const selected =
                  formData.time === time;

                return (
                  <button
                    key={slot.start}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        time,
                      })
                    }
                    className={[
                      "rounded-xl border px-3 py-3 text-sm font-medium transition",
                      selected
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-white hover:border-black",
                    ].join(" ")}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* OBSERVAÇÕES */}
      <div className="space-y-2">
        <Label htmlFor="notes">
          Observações
        </Label>

        <Textarea
          id="notes"
          placeholder="Alguma informação adicional?"
          rows={4}
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,
              notes: e.target.value,
            })
          }
        />
      </div>

      {/* ERRO */}
      {error && (
        <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />

          <div>
            {error}
          </div>
        </div>
      )}

      {/* BOTÃO */}
      <Button
        type="submit"
        disabled={!isFormValid || booking}
        className="w-full py-6 text-lg"
      >
        {booking ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Confirmando agendamento...
          </>
        ) : (
          <>
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Confirmar agendamento
          </>
        )}
      </Button>

      <p className="text-center text-sm text-gray-500">
        Ao confirmar, o horário será reservado
        automaticamente na agenda do Arrasou Sobrancelhas.
      </p>
    </form>
  );
}