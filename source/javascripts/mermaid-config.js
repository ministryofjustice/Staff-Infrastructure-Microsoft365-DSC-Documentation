document.addEventListener('DOMContentLoaded', () => {
    const mermaidScript = document.createElement('script');
    mermaidScript.type = 'module';
    mermaidScript.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    document.head.appendChild(mermaidScript);
  
    mermaidScript.onload = () => {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default', // Customize the theme here
        // Add any other Mermaid configuration options here
      });
  
      const mermaidElements = document.querySelectorAll('pre code.language-mermaid');
      mermaidElements.forEach((element) => {
        const parent = element.parentElement;
        const diagramCode = element.textContent;
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = diagramCode;
        parent.replaceChild(div, element);
      });
      mermaid.init();
    };
  });