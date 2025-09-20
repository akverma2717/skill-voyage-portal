import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { User, Mail, Phone, Building, BookOpen } from 'lucide-react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

export default function Profile() {
  const { profile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    institution: profile?.institution || '',
    department: profile?.department || '',
  });

  const handleSave = () => {
    // Here you would typically save to Supabase
    setIsEditing(false);
  };

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Profile</h1>
            <Button 
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "outline" : "default"}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">
                      {profile?.full_name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{profile?.full_name}</h3>
                  <p className="text-muted-foreground capitalize">{profile?.role}</p>
                  <p className="text-sm text-muted-foreground">{profile?.email}</p>
                </div>
              </CardContent>
            </Card>

            {/* Profile Details */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="full_name"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span>{profile?.full_name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center space-x-2 p-2 border rounded bg-muted">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{profile?.email}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter phone number"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{profile?.phone || 'Not provided'}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    {isEditing ? (
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="Enter institution"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span>{profile?.institution || 'Not provided'}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="department">Department</Label>
                    {isEditing ? (
                      <Input
                        id="department"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        placeholder="Enter department"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span>{profile?.department || 'Not provided'}</span>
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Account Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Account Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {profile?.role === 'faculty' ? '3' : '6'}
                  </h3>
                  <p className="text-muted-foreground">
                    {profile?.role === 'faculty' ? 'Courses Teaching' : 'Courses Enrolled'}
                  </p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {profile?.role === 'faculty' ? '105' : '12'}
                  </h3>
                  <p className="text-muted-foreground">
                    {profile?.role === 'faculty' ? 'Total Students' : 'Achievements'}
                  </p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {new Date(profile?.created_at || '').toLocaleDateString('en-US', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </h3>
                  <p className="text-muted-foreground">Member Since</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}