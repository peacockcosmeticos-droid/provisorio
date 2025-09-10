const images = [
  "/assets/images/5c4f588d-fcfe-4934-82c8-fc6a5e0f5733.png",
  "/assets/images/a1577366-aced-4e49-bc85-6be8168a85bb.png",
  "/assets/images/20d0cd3c-561a-4783-9c9c-fa79667f9ec2.png",
  "/assets/images/7d34adf7-daa9-4b27-b276-e7de95ce8762.png",
  "/assets/images/1ab29c0f-f555-4d9e-9065-31bf5c66bb5b.png",
  "/assets/images/e1210165-0ccf-49c3-a305-86f78b2ba7dc.png",
];

const ReelsMasonry = () => {
  return (
    <section id="reels" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-peacock-dark text-center mb-8">Resultados de clientes</h3>
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]"></div>
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {images.map((src, i) => (
            <img key={i} src={src} alt="Resultado real" className="mb-4 w-full rounded-xl border border-peacock-pink/20 shadow-sm" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsMasonry;

