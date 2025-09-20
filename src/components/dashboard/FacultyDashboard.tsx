import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  TrendingUp, 
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function FacultyDashboard() {
  const { profile } = useAuth();

  const myCourses = [
    { id: 1, name: "Advanced Mathematics", students: 45, nextClass: "Today 10:00 AM", status: "active" },
    { id: 2, name: "Linear Algebra", students: 32, nextClass: "Tomorrow 2:00 PM", status: "active" },
    { id: 3, name: "Statistics", students: 28, nextClass: "Friday 9:00 AM", status: "active" },
  ];

  const pendingTasks = [
    { id: 1, task: "Grade Midterm Exams", course: "Advanced Mathematics", dueDate: "Tomorrow", priority: "high" },
    { id: 2, task: "Prepare Lecture Materials", course: "Linear Algebra", dueDate: "Next Week", priority: "medium" },
    { id: 3, task: "Review Assignment Submissions", course: "Statistics", dueDate: "Friday", priority: "medium" },
  ];

  const recentMessages = [
    { id: 1, student: "John Smith", subject: "Question about Assignment", time: "2 hours ago" },
    { id: 2, student: "Sarah Johnson", subject: "Schedule Change Request", time: "4 hours ago" },
    { id: 3, student: "Mike Wilson", subject: "Grade Inquiry", time: "1 day ago" },
  ];

  const classStats = [
    { course: "Advanced Mathematics", avgGrade: "B+", attendance: "92%" },
    { course: "Linear Algebra", avgGrade: "A-", attendance: "88%" },
    { course: "Statistics", avgGrade: "B", attendance: "85%" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {profile?.full_name}!
        </h1>
        <p className="text-white/80">
          You have 3 classes today and 5 pending grading tasks. Have a productive day!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">105</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Messages</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              My Courses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {myCourses.map((course) => (
              <div key={course.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">{course.students} students enrolled</p>
                  </div>
                  <Badge variant="outline">{course.status}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Next class: {course.nextClass}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {task.priority === 'high' ? (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  )}
                  <div>
                    <p className="font-medium">{task.task}</p>
                    <p className="text-sm text-muted-foreground">{task.course}</p>
                  </div>
                </div>
                <Badge variant={task.priority === 'high' ? 'destructive' : 'secondary'}>
                  {task.dueDate}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Recent Messages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentMessages.map((message) => (
              <div key={message.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{message.student}</p>
                  <p className="text-sm text-muted-foreground">{message.subject}</p>
                </div>
                <span className="text-xs text-muted-foreground">{message.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Class Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Class Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {classStats.map((stat, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <p className="font-medium">{stat.course}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Grade</p>
                      <p className="font-medium">{stat.avgGrade}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Attendance</p>
                      <p className="font-medium">{stat.attendance}</p>
                    </div>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}