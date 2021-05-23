import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

export default function Home() {

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <Layout>
      <Jumbotron className="text-center" style={{ margin: "5rem" }}>
        <h1 >Welcome to Admin Dashboard</h1><br></br>
        <p>
          Et aut est dolor voluptatem natus aut architecto et vel. Enim laborum
          a. Velit vel et. Sit saepe vel excepturi eos reprehenderit rerum
          commodi ut. Quia sunt corporis exercitationem eveniet et quia esse
          consectetur doloribus.
          Et aut est dolor voluptatem natus aut architecto et vel. Enim laborum
          a. Velit vel et. Sit saepe vel excepturi eos reprehenderit rerum
          commodi ut. Quia sunt corporis exercitationem eveniet et quia esse
          consectetur doloribus.
          Et aut est dolor voluptatem natus aut architecto et vel. Enim laborum
          a. Velit vel et. Sit saepe vel excepturi eos reprehenderit rerum
          commodi ut. Quia sunt corporis exercitationem eveniet et quia esse
          consectetur doloribus.
        </p>
      </Jumbotron>
    </Layout>
  );
}
