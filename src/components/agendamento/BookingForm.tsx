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
import { Calendar, Clock, User, Phone, Send } from "lucide-react";

const services: Record<string, string> = {
  design: "Design de Sobrancelhas",
  "design-henna": "Design + Henna",
  coloracao: "Coloração de Sobrancelhas",
  limpeza: "Limpeza de Pele",
  micropigmentacao: "Técnica de Micropgmentação",
  depilacao: "Depilação Facial",
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Monta a mensagem para o WhatsApp
    const serviceName = services[formData.service] || formData.service;
    
    const message = `✨ *NOVO AGENDAMENTO - Arrasou Sobrancelhas* ✨

👤 *Nome:* ${formData.name}
📱 *WhatsApp:* ${formData.whatsapp}
💅 *Serviço:* ${serviceName}
📅 *Data:* ${formatDate(formData.date)}
🕐 *Horário:* ${formData.time}
${formData.notes ? `📝 *Observações:* ${formData.notes}` : ""}

Aguardo confirmação da disponibilidade! 😊`;

    // Número do WhatsApp da designer (sem o 9 extra se necessário)
    const phoneNumber = "5511954239295";
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abre o WhatsApp com a mensagem
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const isFormValid = formData.name && formData.whatsapp && formData.service && formData.date && formData.time;

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
          placeholder="(11) 99999-9999"
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
            <SelectItem value="micropigmentacao">Técnica de Micropgmentação</SelectItem>
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
        disabled={!isFormValid}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg gap-2"
      >
        <Send className="h-5 w-5" />
        Enviar pelo WhatsApp
      </Button>

      <p className="text-sm text-gray-500 text-center">
        * Ao clicar, você será redirecionada para o WhatsApp com os dados preenchidos.
      </p>
    </form>
  );
}