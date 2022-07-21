export default function Home({}) {
  async function putInJar(text) {
    let res = await fetch("/api/jar/put", {
      method: "POST",
      body: JSON.stringify({ text }),
    });
  }

  async function pullFromJar() {}

  return (
    <div>
      <h1>Welcome to Text in a Jar.</h1>
      <div>Click the button to pull a text from the jar.</div>
      <button onClick={() => pullFromJar()}>Get Text!</button>
      <button onClick={() => putInJar("hello world!")}>Put Text!</button>
    </div>
  );
}
