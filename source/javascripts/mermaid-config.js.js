import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
});

document.addEventListener('DOMContentLoaded', () => {
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
});