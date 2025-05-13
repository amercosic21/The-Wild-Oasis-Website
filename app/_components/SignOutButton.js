import { useAuth } from "@/app/_components/AuthContext";
import { signOutAction } from "@/app/_lib/actions";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

function SignOutButton() {
  const { resetAuthState } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOutAction();

      resetAuthState();
      router.push("/");
    } catch {
      console.log("Couldn't Sign Out");
    }
  }

  return (
    <form action={handleSignOut}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
