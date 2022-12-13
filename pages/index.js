import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <div>
      {/* <h1>Home Page</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/product"}>Products</Link>
      <button onClick={handleClick}>Place Order</button> */}

      {/* //////// */}

      <h1>Next JS pre-rendering</h1>
      <Link href={"/users"}>Users</Link>
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}

export default Home;
