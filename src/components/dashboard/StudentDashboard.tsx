import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Award,
  CheckCircle,
  AlertCircle,
  Users
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function StudentDashboard() {
  const { profile } = useAuth();

  const recentCourses = [
    { id: 1, name: "Advanced Mathematics", progress: 75, instructor: "Dr. Smith", nextClass: "Tomorrow 10:00 AM" },
    { id: 2, name: "Computer Science", progress: 90, instructor: "Prof. Johnson", nextClass: "Today 2:00 PM" },
    { id: 3, name: "Physics", progress: 60, instructor: "Dr. Brown", nextClass: "Friday 9:00 AM" },
  ];

  const upcomingAssignments = [
    { id: 1, title: "Math Assignment #3", dueDate: "Tomorrow", course: "Advanced Mathematics", priority: "high" },
    { id: 2, title: "CS Project Report", dueDate: "Next Week", course: "Computer Science", priority: "medium" },
    { id: 3, title: "Physics Lab Report", dueDate: "Friday", course: "Physics", priority: "low" },
  ];

  const recentGrades = [
    { id: 1, course: "Advanced Mathematics", assignment: "Midterm Exam", grade: "A", points: "95/100" },
    { id: 2, course: "Computer Science", assignment: "Project #2", grade: "A-", points: "88/100" },
    { id: 3, course: "Physics", assignment: "Lab Report #4", grade: "B+", points: "82/100" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {profile?.full_name}!
        </h1>
        <p className="text-white/80">
          You have 3 upcoming assignments and 2 classes today. Keep up the great work!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall GPA</p>
                <p className="text-2xl font-bold">3.8</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Achievements</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Course Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">{course.instructor}</p>
                  </div>
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">Next: {course.nextClass}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Assignments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {assignment.priority === 'high' ? (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                  <div>
                    <p className="font-medium">{assignment.title}</p>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={assignment.priority === 'high' ? 'destructive' : 'secondary'}>
                    {assignment.dueDate}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Grades */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Recent Grades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentGrades.map((grade) => (
              <div key={grade.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{grade.assignment}</p>
                  <p className="text-sm text-muted-foreground">{grade.course}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{grade.grade}</Badge>
                    <span className="text-sm text-muted-foreground">{grade.points}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}