export function generateStaticParams() {
  return [{ stateName: "massachusetts" }];
}

const STATE_DATA = {
  massachusetts: {
    name: "Massachusetts",
    region: "EPA Region 1, USACE North Atlantic Division, New England District",
  },
};

export default function StatePage({ params }) {
  const data = STATE_DATA[params.stateName];

  if (!data) {
    return (
      <div className="px-20 py-10 tracking-wide">
        <h1 className="text-3xl text-primary font-bold">Massachusetts</h1>
        <p className="text-gray-600 mt-2">
          We don't have a page for this state yet. Please check back soon.
        </p>

        {/* WIP */}
        <div className="text-center mb-8 mt-10">
          <h1 className="text-3xl text-primary font-bold">
            This page is currently under development
          </h1>
          <p>Please check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-20 py-10 tracking-wide">
      <h1 className="text-3xl text-primary font-bold mb-1">{data.name}</h1>
      <p className="text-gray-500 text-sm">{data.region}</p>
    </div>
  );
}
