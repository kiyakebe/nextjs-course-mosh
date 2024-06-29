import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = async ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h3>Hello {session && session.user!.name}</h3>
      <div>SLUG: {slug}</div>
      <div>SEARCH: {sortOrder}</div>
    </>
  );
};

export default ProductPage;
