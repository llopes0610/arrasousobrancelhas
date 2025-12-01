import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    image: "/images/galeria/design-natural.jpg",
    title: "Design Natural",
    description: "Sobrancelhas com design natural e harmônico",
  },
  {
    id: 2,
    image: "/images/galeria/henna-perfeita.jpg",
    title: "Henna Perfeita",
    description: "Preenchimento com henna para um resultado marcante",
  },
  {
    id: 3,
    image: "/images/galeria/alongamento-premium.jpg",
    title: "Alongamento Premium",
    description: "Cílios alongados com efeito natural",
  },
  {
    id: 4,
    image: "/images/galeria/transformacao-completa.jpg",
    title: "Transformação Completa",
    description: "Antes e depois: resultado incrível",
  },
  {
    id: 5,
    image: "/images/galeria/design-personalizado.jpg",
    title: "Design Personalizado",
    description: "Cada rosto é único, cada design também",
  },
  {
    id: 6,
    image: "/images/galeria/olhar-renovado.jpg",
    title: "Olhar Renovado",
    description: "Confiança e beleza em um único olhar",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-arrasou-200">
          <div className="aspect-square relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}