"use client";

import { useEffect, useRef } from "react";

interface JitsiMeetExternalAPI {
  dispose: () => void;
}

declare global {
  interface Window {
    JitsiMeetExternalAPI: new (domain: string, options: { roomName: string; parentNode: HTMLElement }) => JitsiMeetExternalAPI;
  }
}

export default function MeetingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<JitsiMeetExternalAPI | null>(null);

  useEffect(() => {
    // Load the Jitsi script
    const script = document.createElement("script");
    script.src =
      "https://8x8.vc/vpaas-magic-cookie-8e08dcd6dfbe4d1e969e735f683bed07/external_api.js";
    script.async = true;

    script.onload = () => {
      if (containerRef.current && window.JitsiMeetExternalAPI) {
        apiRef.current = new window.JitsiMeetExternalAPI("8x8.vc", {
          roomName:
            "vpaas-magic-cookie-8e08dcd6dfbe4d1e969e735f683bed07/SampleAppSystematicUniversitiesSelectPromptly",
          parentNode: containerRef.current,
          // Make sure to include a JWT if you intend to record,
          // make outbound calls or use any other premium features!
          // jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtOGUwOGRjZDZkZmJlNGQxZTk2OWU3MzVmNjgzYmVkMDcvNDUyODdiLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3Njg2NTQwNzEsImV4cCI6MTc2ODY2MTI3MSwibmJmIjoxNzY4NjU0MDY2LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtOGUwOGRjZDZkZmJlNGQxZTk2OWU3MzVmNjgzYmVkMDciLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOmZhbHNlLCJmaWxlLXVwbG9hZCI6ZmFsc2UsIm91dGJvdW5kLWNhbGwiOmZhbHNlLCJzaXAtb3V0Ym91bmQtY2FsbCI6ZmFsc2UsInRyYW5zY3JpcHRpb24iOmZhbHNlLCJsaXN0LXZpc2l0b3JzIjpmYWxzZSwicmVjb3JkaW5nIjpmYWxzZSwiZmxpcCI6ZmFsc2V9LCJ1c2VyIjp7ImhpZGRlbi1mcm9tLXJlY29yZGVyIjpmYWxzZSwibW9kZXJhdG9yIjp0cnVlLCJuYW1lIjoiVGVzdCBVc2VyIiwiaWQiOiJnb29nbGUtb2F1dGgyfDExNDUwMjQyMjQwMzg0NDYzMDc1MSIsImF2YXRhciI6IiIsImVtYWlsIjoidGVzdC51c2VyQGNvbXBhbnkuY29tIn19LCJyb29tIjoiKiJ9.U3zadXlwdBfHYlkp0weW_byepumswLdNHJOMCs8wbAHgkK66CrWmw9x-bD5j3QRhJ6MtmtzGS3F7C-MU4pol52yKOTvFIMXqztehVU_I2qIPd_CJ0ozj8Zdl-LI5WYfjiuV3miEdZEO_9sDMQwzH22mvNEDs3OInWWaZ1z_DCYyss_sBWHu5xmB6UbShuWVHaFYGzBRcsN8aFVb324D322DdL5tw9EcUD69eECaTJWWHQxUahPSWe5PUQZeZFxhPq1wf6ig7EtQG3hRl7gg_FOxmZeWhCIv_0lDal-GV4CLkenBoFmWsPE271Cbw-LDn2BjJZwwQqRzWIct9hLVVPg"
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: dispose of Jitsi API when component unmounts
      if (apiRef.current) {
        apiRef.current.dispose();
      }
      // Remove script if component unmounts before script loads
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div id="jaas-container" ref={containerRef} className="w-full h-full" />
    </div>
  );
}
