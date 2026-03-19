import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Healthy Recipe Finder`
      : "Healthy Recipe Finder";
  }, [title]);
}