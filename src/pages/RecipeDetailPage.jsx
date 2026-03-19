import { useParams } from "react-router-dom";

export default function RecipeDetailPage() {
  const { slug } = useParams();

  return (
    <section className="container-app py-16 md:py-20">
      <h1 className="section-title text-4xl md:text-5xl">{slug}</h1>
    </section>
  );
}