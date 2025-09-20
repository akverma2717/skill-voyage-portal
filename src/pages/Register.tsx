import { useSearchParams } from 'react-router-dom';
import RegisterForm from '@/components/auth/RegisterForm';

export default function Register() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') as 'student' | 'faculty' | null;

  return <RegisterForm defaultRole={role || 'student'} />;
}