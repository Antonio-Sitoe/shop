export default function page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h3>Produts {params.slug}</h3>
    </main>
  )
}
