"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Form() {
  const router = useRouter();
  const [username, setUsername] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      router.push("/feed");
    } else {
      alert("Sign in failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-2 p-5 max-w-xs w-full dark:bg-slate-800 bg-slate-300 rounded-lg"
    >
      <div className="text-center">
        <h3 className="font-semibold">Login</h3>
      </div>
      <div className="my-3">
        <hr />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <label>Username</label>
          <input
            className="text-black p-3 border border-slate-700 rounded-lg"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="username"
            placeholder="Username"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Password</label>
        <input
            className="text-black p-3 border border-slate-700 rounded-lg"
            type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="mt-4 dark:bg-slate-900 bg-slate-400 text-white p-3 rounded-lg">Sign In</button>
        <p>Dont have any account <Link href="/account" className="text-blue-500"> click here </Link> </p>
    </form>
  );
}
