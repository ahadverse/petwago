export default function ProductGridSkeleton() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        <div className="h-9 w-40 bg-gray-200 rounded-sm animate-pulse" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col bg-white border border-border rounded-sm overflow-hidden">
            <div className="aspect-[4/5] w-full bg-gray-200 animate-pulse" />
            <div className="flex flex-col px-3.5 pt-3 pb-3.5 gap-2">
              <div className="h-2.5 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-3.5 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-3.5 w-2/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse mt-1" />
              <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse mt-1.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
