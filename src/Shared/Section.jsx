function Section() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative bg-black rounded-full p-2">
            <img
              src="https://res.cloudinary.com/dohv9bd7g/image/upload/v1720705092/IMAGE_2024-07-07_22_41_42_touzv8.jpg"
              alt="Krish"
              className="rounded-full h-48 w-48 md:h-56 md:w-56 shadow-md brightness-120 object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="font-belleza text-4xl md:text-5xl lg:text-5xl">
            Hi, I am Krish.
          </div>
          <div className="font-mulish text-2xl md:text-3xl lg:text-3xl font-semibold">
            Cloud &amp; DevOps Engineer
          </div>
          <div className="font-mulish text-lg md:text-xl text-gray-700">
            AWS · Terraform · Jenkins · Docker · Kubernetes
          </div>
          <div className="font-mulish text-base md:text-lg text-gray-600 max-w-xl">
            I design reliable AWS infrastructure and automate CI/CD pipelines so teams can deploy quickly,
            safely, and cost‑effectively.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
