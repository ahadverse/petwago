import Link from "next/link";
import { getUsers, UserSort } from "@petbackend/users";

export const dynamic = "force-dynamic";

const SORT_OPTIONS: { value: UserSort; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "name_asc", label: "Name A-Z" },
  { value: "name_desc", label: "Name Z-A" },
  { value: "email_asc", label: "Email A-Z" },
];

const VALID_SORTS = SORT_OPTIONS.map((o) => o.value);

function formatDate(date: Date | string) {
  return new Date(date).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

interface PageProps {
  searchParams: Promise<{ page?: string; search?: string; sort?: string }>;
}

export default async function AdminUsersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page ?? "1") || 1;
  const search = params.search?.trim() || undefined;
  const sort = VALID_SORTS.includes(params.sort as UserSort) ? (params.sort as UserSort) : "newest";

  const { users, total, pages } = await getUsers({ search, sort, page });

  function buildHref(overrides: Record<string, string | undefined>) {
    const next = new URLSearchParams();
    if (search) next.set("search", search);
    if (sort !== "newest") next.set("sort", sort);
    if (page > 1) next.set("page", String(page));

    for (const [key, value] of Object.entries(overrides)) {
      if (value === undefined) next.delete(key);
      else next.set(key, value);
    }

    const qs = next.toString();
    return qs ? `/admin/users?${qs}` : "/admin/users";
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark">Users</h1>
        <p className="text-sm text-muted">{total} user{total === 1 ? "" : "s"} total</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <form action="/admin/users" method="get" className="flex items-center gap-2">
          {sort !== "newest" && <input type="hidden" name="sort" value={sort} />}
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Search by name or email…"
            className="px-3 py-1.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2">
          {SORT_OPTIONS.map((opt) => (
            <Link
              key={opt.value}
              href={buildHref({ sort: opt.value === "newest" ? undefined : opt.value, page: undefined })}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
                sort === opt.value ? "bg-primary text-white border-primary" : "border-border text-muted hover:bg-light"
              }`}
            >
              {opt.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted border-b border-border">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={String(user._id)} className="border-b border-border last:border-0 hover:bg-light">
                  <td className="px-5 py-3 text-dark font-medium">{user.name}</td>
                  <td className="px-5 py-3 text-muted">{user.email}</td>
                  <td className="px-5 py-3 text-muted">{formatDate(user.createdAt)}</td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-5 py-8 text-center text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {pages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-border text-sm">
            <span className="text-muted">
              Page {page} of {pages}
            </span>
            <div className="flex gap-2">
              <Link
                href={buildHref({ page: String(Math.max(1, page - 1)) })}
                className={`px-3 py-1.5 rounded-lg border border-border ${page <= 1 ? "pointer-events-none opacity-40" : "hover:bg-light"}`}
              >
                Previous
              </Link>
              <Link
                href={buildHref({ page: String(Math.min(pages, page + 1)) })}
                className={`px-3 py-1.5 rounded-lg border border-border ${page >= pages ? "pointer-events-none opacity-40" : "hover:bg-light"}`}
              >
                Next
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
