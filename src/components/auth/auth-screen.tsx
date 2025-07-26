"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, User } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

export function AuthScreen() {
  const [mode, setMode] = useState<"login" | "register" | "guest">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Card className="p-10 w-full max-w-md shadow-2xl flex flex-col gap-7 rounded-2xl border border-blue-100 bg-white/90">
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-blue-900 text-center mb-3 tracking-tight drop-shadow-sm">Prismix Portal</h1>
        <div className="flex justify-center gap-2 mb-6">
          <Button variant={mode === "login" ? "default" : "outline"} onClick={() => setMode("login")} className="rounded-full px-6 font-semibold text-base">Login</Button>
          <Button variant={mode === "register" ? "default" : "outline"} onClick={() => setMode("register") } className="rounded-full px-6 font-semibold text-base">Register</Button>
          <Button variant={mode === "guest" ? "default" : "outline"} onClick={() => setMode("guest")} className="rounded-full px-6 font-semibold text-base">Guest</Button>
        </div>
        <div className="mb-2" />
        {mode === "login" && <LoginForm />}
        {mode === "register" && <RegisterForm />}
        {mode === "guest" && <GuestEntry />}
        <div className="flex flex-col gap-3 mt-6">
          <Button variant="outline" className="flex gap-2 items-center justify-center rounded-full border-blue-200 hover:border-blue-400 shadow-sm text-blue-900 font-semibold">
            <Github className="w-5 h-5" /> Continue with GitHub
          </Button>
          <Button variant="outline" className="flex gap-2 items-center justify-center rounded-full border-blue-200 hover:border-blue-400 shadow-sm text-blue-900 font-semibold">
            <User className="w-5 h-5" /> Continue with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}

function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="flex flex-col gap-5 mt-2"
      onSubmit={e => {
        e.preventDefault();
        login(email, password);
        router.push("/portal");
      }}
    >
      <Input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="rounded-full px-6 py-4 border-blue-200 focus:border-blue-400 shadow-sm text-lg" />
      <Input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} className="rounded-full px-6 py-4 border-blue-200 focus:border-blue-400 shadow-sm text-lg" />
      <Button type="submit" className="rounded-full px-6 py-4 bg-blue-900 hover:bg-blue-950 text-white text-lg font-semibold shadow-md mt-2">Login</Button>
    </form>
  );
}

function RegisterForm() {
  const { register } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="flex flex-col gap-5 mt-2"
      onSubmit={e => {
        e.preventDefault();
        register(name, email, password);
        router.push("/portal");
      }}
    >
      <Input type="text" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} className="rounded-full px-6 py-4 border-blue-200 focus:border-blue-400 shadow-sm text-lg" />
      <Input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="rounded-full px-6 py-4 border-blue-200 focus:border-blue-400 shadow-sm text-lg" />
      <Input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} className="rounded-full px-6 py-4 border-blue-200 focus:border-blue-400 shadow-sm text-lg" />
      <Button type="submit" className="rounded-full px-6 py-4 bg-blue-900 hover:bg-blue-950 text-white text-lg font-semibold shadow-md mt-2">Register</Button>
    </form>
  );
}

function GuestEntry() {
  const { guest } = useAuth();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 items-center mt-6">
      <Badge className="bg-primary text-white text-base px-6 py-2 rounded-full shadow">Guest Mode</Badge>
      <p className="text-gray-700 text-center text-base font-serif italic">Explore the portal as a guest. Some features will be limited.</p>
      <Button className="rounded-full px-8 py-4 bg-primary/90 hover:bg-primary text-white text-lg font-semibold shadow-md mt-2" onClick={() => { guest(); router.push("/portal"); }}>
        Continue as Guest
      </Button>
    </div>
  );
}
