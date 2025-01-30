```javascript
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function getServerSideProps(context) {
  try {
    const session = await unstable_getServerSession(context, authOptions);

    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {
        session,
      },
    };
  } catch (error) {
    console.error('Error getting server session:', error);
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
}
```