# Whiteboard
- for example like the figma

# tecnologi
  - vite
  - react flow [https://reactflow.dev/docs/getting-started/installation-and-requirements/] 
  - tailwind
  - radix ui [https://www.radix-ui.com/docs/primitives/overview/getting-started]

# roadmap
  - vite
  - ReactFlow
    - npm i reactflow
  - Tailwind
    - npm i -D tailwindcss 
postcss autoprefixer
    - npx tailwindcss init -p
    - config pages: 
      - create `global.css`
      - import in `main.tsx`
      - config `tailwind.config.cjs`s
  - create components nodes (os meninos na tela)
    - `components/square`
  - import `app`
  - habilitar ser usado, as handles
    - `components/square`
    - habilitar ser conectado em tudo
      - {ConnectionMode.Loose} permite isso
    - Blz ate o momento ele faz os meninos bonitinho porem n ta salvado, devemos salvar o estado do corno
      - useEdgesState() = ele 'e especifico p armazenar as conexao
        - funt de dentro do menino `onEdgesChange` monitorar as mudanca
    - mudar as cores da bolinha e mulplicando eles
  - tirar os meninos de fixo em `app`
    - criando state *nodes* e chamando na props do ReactFlow *onNodesChange e nodes*.
      - agora vc pode mexes neles
  - criando as Edges `components/edges`
    - criando todo o codigo, pegamos o type *getSmoothStepPath*
      - Mas tem varios tipo de linha
    - add no `app`
      - criando o *Type_Edge* e add na props
  - em `components/edges`
    - mudar tamanho e cor
  - install *radix ui*
    - npm install @radix-ui/react-toolbar
    - vamos utilizar um *tooobar* dele  
    - add em `app`
      - add o component flutuante
      - add o botao e func chamando mais nodes
  - (tamanho) redimensionar os meninos, pluguins p colocar funcionalidade novas
    - npm i @reactflow/node-resizer
    - dentro de `nodes/Square`
      - estilizar o menino de deixar os cara crescer

# 

