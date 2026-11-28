import { AdminUsersTable, RolePermissionsMatrix } from "@/features/admin/users";

export default function AdminUsersPage() {
  return (
    <main>
      <AdminUsersTable />
      <RolePermissionsMatrix />
    </main>
  );
}
