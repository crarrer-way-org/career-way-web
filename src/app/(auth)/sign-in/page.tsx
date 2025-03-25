import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthForm } from "@/features/auth/componenets/auth-form";

const SigninPage = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>Sign in to Skill Craft account</CardDescription>
      </CardHeader>
      <CardContent>
        <AuthForm variant="sign-in" />
      </CardContent>
    </Card>
  );
};

export default SigninPage;
