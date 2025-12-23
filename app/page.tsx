import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <h1>Welcome to BEMO</h1>

      <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '2rem' }}>
        <Image
          src="/letsdance.gif"
          alt="BEMO"
          fill
          style={{ objectFit: 'contain' }}
          className="hero-image"
          unoptimized
        />
      </div>

      <h2>Emotional Support Companion</h2>

      <p>
        Would you like support in figuring out what you are feeling? Well, I am here to help!
        My name is <b>BEMO</b>, I am a programmed chatbot who uses music to turn your emotions into words.
        <b> Click</b> the icon at the bottom right to begin!
      </p>

      <Script id="watson-assistant-setup" strategy="afterInteractive">
        {`
          window.watsonAssistantChatOptions = {
            integrationID: "28d86b0d-1d3f-4941-91f7-fd89d8e54b44",
            region: "us-south",
            serviceInstanceID: "ddfa68b0-e43c-4c43-8a06-335b87d08e81",
            onLoad: async (instance) => { await instance.render(); }
          };
          setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
          });
        `}
      </Script>
    </main>
  );
}
