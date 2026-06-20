export default function InternalPageHero({ title, subtitle, link }) {
  const titleContent = (
    <>
      <h1 className="!mb-0 !mt-1 !text-4xl font-bold text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="!mt-2 text-lg text-gray-200">
          {subtitle}
        </p>
      )}
    </>
  );

  return (
    <div className="relative mt-4 h-28 text-white">
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-black opacity-65" />

      <div className="relative z-10 px-1 py-4 text-center duration-300 hover:scale-105">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white no-underline hover:no-underline"
          >
            {titleContent}
          </a>
        ) : (
          titleContent
        )}
      </div>
    </div>
  );
}