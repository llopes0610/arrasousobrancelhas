"use client";

import { useState } from "react";
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
import { toast } from "sonner";  // ✅ CORRETO
import { Calendar, Clock, User, Phone } from "lucide-react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Dados do agendamento:", formData);

    // ✅ Usar toast do Sonner
    toast.success("Agendamento Recebido! 🎉", {
      description: "Entraremos em contato em breve para confirmar seu horário. Obrigada!",
    });

    // Limpar formulário
    setFormData({
      name: "",
      whatsapp: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User className="h-4 w-4 text-arrasou-400" />
          Nome Completo *
        </Label>
        <Input
          id="name"
          required
          placeholder="Digite seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp" className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-arrasou-400" />
          WhatsApp *
        </Label>
        <Input
          id="whatsapp"
          required
          type="tel"
          placeholder="(11) 91731-2858"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Serviço Desejado *</Label>
        <Select
          required
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger id="service">
            <SelectValue placeholder="Selecione o serviço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="design">Design de Sobrancelhas</SelectItem>
            <SelectItem value="design-henna">Design + Henna</SelectItem>
            <SelectItem value="coloracao">Coloração de Sobrancelhas</SelectItem>
            <SelectItem value="alongamento">Alongamento de Cílios</SelectItem>
            <SelectItem value="limpeza">Limpeza de Pele</SelectItem>
            <SelectItem value="depilacao">Depilação Facial</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-arrasou-400" />
            Data Preferencial *
          </Label>
          <Input
            id="date"
            required
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time" className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-arrasou-400" />
            Horário Preferencial *
          </Label>
          <Select
            required
            value={formData.time}
            onValueChange={(value) => setFormData({ ...formData, time: value })}
          >
            <SelectTrigger id="time">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">09:00</SelectItem>
              <SelectItem value="10:00">10:00</SelectItem>
              <SelectItem value="11:00">11:00</SelectItem>
              <SelectItem value="12:00">12:00</SelectItem>
              <SelectItem value="13:00">13:00</SelectItem>
              <SelectItem value="14:00">14:00</SelectItem>
              <SelectItem value="15:00">15:00</SelectItem>
              <SelectItem value="16:00">16:00</SelectItem>
              <SelectItem value="17:00">17:00</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Observações (opcional)</Label>
        <Textarea
          id="notes"
          placeholder="Alguma informação adicional que gostaria de compartilhar?"
          rows={4}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-arrasou-400 hover:bg-arrasou-500 text-white py-6 text-lg"
      >
        {loading ? "Enviando..." : "Confirmar Agendamento"}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        * Campos obrigatórios. Entraremos em contato para confirmar o horário.
      </p>
    </form>
  );
}