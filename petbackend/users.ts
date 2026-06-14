import { connectDB } from './db';
import User from './models/User';

const PAGE_SIZE = 20;

export type UserSort = 'newest' | 'oldest' | 'name_asc' | 'name_desc' | 'email_asc';

const SORT_MAP: Record<UserSort, Record<string, 1 | -1>> = {
  newest: { createdAt: -1 },
  oldest: { createdAt: 1 },
  name_asc: { name: 1 },
  name_desc: { name: -1 },
  email_asc: { email: 1 },
};

export interface GetUsersParams {
  search?: string;
  sort?: UserSort;
  page?: number;
}

export async function getUsers({ search, sort = 'newest', page = 1 }: GetUsersParams) {
  await connectDB();

  const query: Record<string, unknown> = {};
  if (search) {
    const regex = new RegExp(search.trim(), 'i');
    query.$or = [{ name: regex }, { email: regex }];
  }

  const total = await User.countDocuments(query);
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), pages);

  const users = await User.find(query)
    .select('name email createdAt')
    .sort(SORT_MAP[sort] ?? SORT_MAP.newest)
    .skip((currentPage - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .lean();

  return { users, total, page: currentPage, pages };
}
