import ReactFlow, { Background, Controls, Node, ConnectionMode, useEdgesState, Connection, addEdge, useNodesState} from 'reactflow';
import * as Toobar from '@radix-ui/react-toolbar';
import {zinc} from 'tailwindcss/colors';
import 'reactflow/dist/style.css';
import { Square } from './components/nodes/Square';
import { useCallback } from 'react';
import DefaultEdge from './components/edges/DefaultEdge';

const NODE_TYPES = {
  square: Square,
}
const EDGE_TYPES = {
  default: DefaultEdge,
}

// satisfies = diz q ele precisar seguir o tipo de algue
const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 200,
    },
    data: {},
  },
  {
    id: crypto.randomUUID( ),
    type: 'square',
    position: {
      x: 1000,
      y: 200,
    },
    data: {},
  },
  {
    id: crypto.randomUUID( ),
    type: 'square',
    position: {
      x: 200,
      y: 450,
    },
    data: {},
  },
] satisfies Node[]

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  // usando o useCalback p evitar as renderizacoes desnecesarias
  const onConnect = useCallback((connection: Connection) => {
    // setEdges pegando o valro anterior
    return setEdges((edges) => addEdge(connection, edges))
  }, []);

  const addSquareNode = () => {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ])
  }
 
  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background 
          gap={12}
          size={2} 
          color={zinc[200]}
        />
        <Controls />
      </ReactFlow>
      <Toobar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
        <Toobar.Button
          onClick={addSquareNode}
          className='w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2' 
        />
      </Toobar.Root>
    </div>
  )
}

export default App
