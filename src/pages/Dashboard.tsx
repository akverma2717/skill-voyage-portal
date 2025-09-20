import { useAuth } from '@/hooks/useAuth';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import FacultyDashboard from '@/components/dashboard/FacultyDashboard';

export default function Dashboard() {
  const { profile } = useAuth();

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        {profile?.role === 'faculty' ? <FacultyDashboard /> : <StudentDashboard />}
      </main>
    </div>
  );
}