import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  ChevronRight,
  Facebook,
  GraduationCap,
  Instagram,
  Lightbulb,
  MapPin,
  Phone,
  Target,
  Twitter,
  Users,
  Youtube,
} from "lucide-react"

export default function OmClassesLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">OM CLASSES</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:text-primary">
              Courses
            </Link>
            <Link href="#faculty" className="text-sm font-medium hover:text-primary">
              Faculty
            </Link>
            <Link href="#results" className="text-sm font-medium hover:text-primary">
              Results
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
            <Button>Enroll Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-primary text-primary-foreground">Admissions Open</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Academic Potential
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join OM CLASSES for expert coaching, personalized attention, and proven results. We help students
                    excel in their academic journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Enroll Now <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Explore Courses
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Students studying at OM CLASSES"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">95%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">10+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">50+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Expert Faculty</p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">5000+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Success Stories</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Excellence in Education Since 2013
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  OM CLASSES was founded with a vision to provide quality education and guidance to students preparing
                  for competitive exams and academic excellence.
                </p>
                <p className="text-muted-foreground">
                  Our approach combines traditional teaching methods with modern technology to create an engaging and
                  effective learning environment. We focus on building strong fundamentals, critical thinking, and
                  problem-solving skills.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Experienced faculty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Small batch sizes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Regular assessments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Personalized attention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Modern facilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Digital learning tools</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="OM CLASSES campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Sets Us Apart</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We provide a comprehensive learning experience that goes beyond textbooks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our teachers are subject matter experts with years of experience in coaching students for
                    competitive exams.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Comprehensive Study Material</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Meticulously designed study materials that cover the entire syllabus with practice questions and
                    solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Focused Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our teaching methodology is focused on building strong fundamentals and developing problem-solving
                    skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Doubt Clearing Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Regular doubt clearing sessions ensure that no concept remains unclear, helping students build
                    confidence.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Regular Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Weekly tests and mock exams to track progress and identify areas that need improvement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our consistent results speak for themselves, with students securing top ranks in various competitive
                    exams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Courses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Comprehensive Academic Programs
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We offer specialized coaching for various subjects and competitive exams.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mathematics Coaching"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Mathematics</CardTitle>
                  <CardDescription>Grades 8-12 & Competitive Exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive mathematics coaching with focus on problem-solving techniques and conceptual clarity.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Physics Coaching"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Physics</CardTitle>
                  <CardDescription>Grades 11-12 & Engineering Entrance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Master physics concepts with practical applications and problem-solving strategies for competitive
                    exams.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Chemistry Coaching"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Chemistry</CardTitle>
                  <CardDescription>Grades 11-12 & Medical Entrance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive chemistry coaching covering organic, inorganic, and physical chemistry with regular
                    practice.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="JEE Preparation"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>JEE Preparation</CardTitle>
                  <CardDescription>Engineering Entrance Exam</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Specialized coaching for JEE Main and Advanced with focus on problem-solving and time management.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="NEET Preparation"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>NEET Preparation</CardTitle>
                  <CardDescription>Medical Entrance Exam</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive coaching for NEET with focus on biology, physics, and chemistry with regular mock
                    tests.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Foundation Courses"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Foundation Courses</CardTitle>
                  <CardDescription>Grades 8-10</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Early preparation for competitive exams with focus on building strong fundamentals in science and
                    mathematics.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button>View All Courses</Button>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Faculty
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Learn from the Best</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our experienced faculty members are dedicated to helping students achieve academic excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Prof. Sharma" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Prof. Rajesh Sharma</CardTitle>
                  <CardDescription>Mathematics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    15+ years of experience in teaching mathematics for competitive exams. M.Sc. in Mathematics from
                    IIT.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Dr. Patel" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Dr. Anita Patel</CardTitle>
                  <CardDescription>Physics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ph.D. in Physics with 12+ years of teaching experience. Specializes in mechanics and
                    electromagnetism.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Dr. Kumar" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Dr. Sunil Kumar</CardTitle>
                  <CardDescription>Chemistry</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ph.D. in Organic Chemistry with 10+ years of experience in teaching for medical entrance exams.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline">View All Faculty</Button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Results
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our students have consistently achieved outstanding results in various competitive exams.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Student Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Rahul Verma</CardTitle>
                      <CardDescription>JEE Advanced - AIR 245</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The structured approach and regular mock tests at OM CLASSES helped me identify my weaknesses and
                    work on them systematically."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Student Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Priya Singh</CardTitle>
                      <CardDescription>NEET - AIR 189</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The faculty at OM CLASSES is exceptional. Their guidance and support were crucial in my NEET
                    preparation journey."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Student Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Amit Patel</CardTitle>
                      <CardDescription>State Board - 98.7%</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The personalized attention and comprehensive study material helped me secure top marks in my board
                    exams."
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-primary text-primary-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">50+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Students in Top 1000 JEE Ranks</p>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">75+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Students in Top 1000 NEET Ranks</p>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">200+</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Students with 95%+ in Boards</p>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-4xl font-bold">100%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>Success Rate in Board Exams</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Parents & Students Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear from our students and their parents about their experience with OM CLASSES.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Parent Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Mrs. Sharma</CardTitle>
                      <CardDescription>Parent</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The dedicated faculty at OM CLASSES helped my son improve his grades significantly. The regular
                    progress reports kept us informed about his performance."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Student Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Ravi Kumar</CardTitle>
                      <CardDescription>Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The teaching methodology at OM CLASSES is unique. The concepts are explained in a simple manner
                    with plenty of examples and practice problems."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Parent Avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">Mr. Patel</CardTitle>
                      <CardDescription>Parent</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The personal attention given to each student is commendable. The teachers are always available to
                    clear doubts and provide additional support when needed."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Facilities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Modern Learning Environment</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We provide state-of-the-art facilities to enhance the learning experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h10" />
                        <path d="M7 12h10" />
                        <path d="M7 17h10" />
                      </svg>
                    </div>
                    <CardTitle>Smart Classrooms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Equipped with digital boards and multimedia tools to make learning interactive and engaging.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <CardTitle>Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Well-stocked library with reference books, study materials, and past papers for comprehensive
                      preparation.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                      </svg>
                    </div>
                    <CardTitle>Computer Lab</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Modern computer lab for online tests, educational software, and digital learning resources.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M2 3h20" />
                        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                        <path d="m7 21 5-5 5 5" />
                      </svg>
                    </div>
                    <CardTitle>Study Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Dedicated quiet study spaces where students can focus on self-study and group discussions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Admission Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How to Join OM CLASSES</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Follow these simple steps to enroll in our coaching programs.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-4">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      1
                    </div>
                    <CardTitle>Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Fill out the inquiry form or contact us directly to express your interest.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      2
                    </div>
                    <CardTitle>Counseling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Schedule a counseling session to understand your goals and recommend suitable programs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      3
                    </div>
                    <CardTitle>Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Take a diagnostic test to assess your current knowledge level and areas for improvement.
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                      4
                    </div>
                    <CardTitle>Enrollment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Complete the registration process, pay the fees, and join your classes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="gap-1">
                Enroll Now <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Excel in Your Academic Journey?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Join OM CLASSES today and take the first step towards academic excellence and a successful future.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="text-muted-foreground md:text-xl">
                  Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Education Street, Knowledge City, 123456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>info@omclasses.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div>
                      <p>Monday - Saturday: 9am - 8pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="course"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Course of Interest
                    </label>
                    <Input id="course" placeholder="e.g., JEE Preparation, Mathematics" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">OM CLASSES</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering students to achieve academic excellence through quality education and personalized guidance.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
                <Link href="#courses" className="text-sm text-muted-foreground hover:text-foreground">
                  Courses
                </Link>
                <Link href="#faculty" className="text-sm text-muted-foreground hover:text-foreground">
                  Faculty
                </Link>
                <Link href="#results" className="text-sm text-muted-foreground hover:text-foreground">
                  Results
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Support</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates on new courses, events, and success stories.
              </p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Your email" className="max-w-lg flex-1" />
                <Button type="submit" variant="outline">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OM CLASSES. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block h-4 w-4 text-primary"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>{" "}
              for academic excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

