import Link from "next/link";

function UserAuthData() {
  return (
    <div>
        <Link href={`/admin/`}>
            Admin
        </Link>
    </div>
  );
}

export default UserAuthData;
