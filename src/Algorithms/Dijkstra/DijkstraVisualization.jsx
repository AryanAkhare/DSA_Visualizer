import React, { useRef, useEffect, useState } from 'react';
import '../../Stylesheets/Dijkstra.module.css'; // Ensure you have your styles imported
import ContentSwitcher from './ContentSwitcher';

const DijkstraVisualization = () => {
    const canvasRef = useRef(null);
    const [resetVisible, setResetVisible] = useState(false);
    const [visualizeDisabled, setVisualizeDisabled] = useState(false);
    const ctxRef = useRef(null);

    const graph = {
        a: { b: 22, d: 8 },
        b: { a: 22, c: 20, e: 2 },
        c: { b: 20, d: 10, e: 4, f: 7 },
        d: { a: 8, c: 10, f: 6 },
        e: { b: 2, c: 4, z: 4 },
        f: { c: 7, d: 6, z: 9 },
        z: { e: 4, f: 9 },
    };

    const nodePositions = {
        a: { x: 50, y: 200 },
        b: { x: 150, y: 100 },
        c: { x: 300, y: 200 },
        d: { x: 150, y: 300 },
        e: { x: 450, y: 100 },
        f: { x: 450, y: 300 },
        z: { x: 550, y: 200 },
    };

    let visitedNodes = new Set();
    let visitedEdges = new Set();
    let finalPath = [];

    useEffect(() => {
        ctxRef.current = canvasRef.current.getContext('2d');
        drawGraph();
    }, []);

    const drawGraph = () => {
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (const [node, neighbors] of Object.entries(graph)) {
            for (const [neighbor, weight] of Object.entries(neighbors)) {
                drawEdge(node, neighbor, weight);
            }
        }

        for (const [node, position] of Object.entries(nodePositions)) {
            drawNode(node, position);
        }
    };

    const drawNode = (node, position) => {
        const ctx = ctxRef.current;
        ctx.beginPath();
        ctx.arc(position.x, position.y, 20, 0, 2 * Math.PI);
        
        if (finalPath.includes(node)) {
            ctx.fillStyle = '#66FCF1'; // Neon Cyan
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#66FCF1';
        } else if (visitedNodes.has(node)) {
            ctx.fillStyle = '#aa00ff'; // Neon Purple
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#aa00ff';
        } else {
            ctx.fillStyle = '#1f2833'; // Dark Node
            ctx.shadowBlur = 0;
        }
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.shadowBlur = 0; // Reset shadow for text
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 16px Outfit, sans-serif';
        ctx.fillText(node.toUpperCase(), position.x, position.y);
    };

    const drawEdge = (node1, node2, weight) => {
        const ctx = ctxRef.current;
        const pos1 = nodePositions[node1];
        const pos2 = nodePositions[node2];
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);

        if (isEdgeInFinalPath(node1, node2)) {
            ctx.strokeStyle = '#66FCF1';
            ctx.lineWidth = 4;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#66FCF1';
        } else if (visitedEdges.has(`${node1}-${node2}`) || visitedEdges.has(`${node2}-${node1}`)) {
            ctx.strokeStyle = '#aa00ff';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#aa00ff';
        } else {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
        }

        ctx.stroke();
        ctx.shadowBlur = 0; // Reset shadow

        const midX = (pos1.x + pos2.x) / 2;
        const midY = (pos1.y + pos2.y) / 2;
        
        // Background pill for edge weight
        ctx.fillStyle = '#0b0c10';
        ctx.beginPath();
        ctx.roundRect(midX - 12, midY - 10, 24, 20, 5);
        ctx.fill();

        ctx.fillStyle = '#c5c6c7';
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(weight.toString(), midX, midY);
    };

    const isEdgeInFinalPath = (node1, node2) => {
        for (let i = 0; i < finalPath.length - 1; i++) {
            if (
                (finalPath[i] === node1 && finalPath[i + 1] === node2) ||
                (finalPath[i] === node2 && finalPath[i + 1] === node1)
            ) {
                return true;
            }
        }
        return false;
    };

    const dijkstra = (start, end) => {
        const distances = {};
        const previous = {};
        const unvisited = new Set(Object.keys(graph));

        for (const node of unvisited) {
            distances[node] = Infinity;
        }
        distances[start] = 0;
        visitedNodes.add(start);

        const getMinDistanceNode = () => {
            return [...unvisited].reduce((min, node) =>
                distances[node] < distances[min] ? node : min
            );
        };

        const step = () => {
            if (unvisited.size === 0) {
                finishVisualization(previous, start, end);
                return;
            }

            const current = getMinDistanceNode();
            unvisited.delete(current);
            visitedNodes.add(current);

            if (current === end) {
                finishVisualization(previous, start, end);
                return;
            }

            for (const [neighbor, weight] of Object.entries(graph[current])) {
                if (unvisited.has(neighbor)) {
                    const alt = distances[current] + weight;
                    if (alt < distances[neighbor]) {
                        distances[neighbor] = alt;
                        previous[neighbor] = current;
                        visitedEdges.add(`${current}-${neighbor}`);
                    }
                }
            }

            drawGraph();
            setTimeout(step, 1000);
        };

        step();
    };

    const finishVisualization = (previous, start, end) => {
        console.log('Visualization complete');
        finalPath = getPath(previous, start, end);
        console.log('Shortest path:', finalPath);
        drawGraph(); // Redraw to show the final path
        setResetVisible(true);
        setVisualizeDisabled(true);
    };

    const getPath = (previous, start, end) => {
        const path = [];
        let current = end;
        while (current !== undefined && current !== start) {
            path.unshift(current);
            current = previous[current];
        }
        if (current === undefined) {
            console.error('No path found');
            return [];
        }
        path.unshift(start);
        return path;
    };

    const visualizeAlgorithm = () => {
        visitedNodes.clear();
        visitedEdges.clear();
        finalPath = [];
        dijkstra('a', 'z');
    };

    const reset = () => {
        visitedNodes.clear();
        visitedEdges.clear();
        finalPath = [];
        drawGraph();
        setResetVisible(false);
        setVisualizeDisabled(false);
    };

    return (
        <div className="dijkstra-wrapper">
            <style>{`
                .dijkstra-wrapper {
                    padding: 40px 20px;
                    min-height: 100vh;
                    font-family: var(--font-body, 'Inter');
                    color: var(--text-main, #FFFFFF);
                }

                .dijkstra-glass-card {
                    background-color: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                    padding: 40px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .dijkstra-title {
                    font-family: var(--font-heading, 'Outfit');
                    font-size: 36px;
                    font-weight: 800;
                    margin-bottom: 30px;
                    text-align: center;
                    background: linear-gradient(135deg, #ffffff 0%, #66FCF1 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .layout-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: start;
                }

                @media (max-width: 900px) {
                    .layout-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .canvas-container {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 15px;
                    padding: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .dijkstra-canvas {
                    background: transparent;
                    max-width: 100%;
                    border-radius: 10px;
                }

                .controls-row {
                    display: flex;
                    gap: 15px;
                    margin-top: 20px;
                    justify-content: center;
                }

                .action-btn {
                    padding: 12px 25px;
                    font-size: 15px;
                    font-family: var(--font-heading, 'Outfit');
                    font-weight: 600;
                    text-transform: uppercase;
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .action-btn:disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                }

                .visualize-btn:not(:disabled):hover {
                    background: linear-gradient(135deg, #45A29E, #66FCF1);
                    box-shadow: 0 8px 20px rgba(102, 252, 241, 0.3);
                    border-color: transparent;
                    transform: translateY(-2px);
                }

                .reset-btn {
                    background: rgba(255, 0, 0, 0.1);
                    border-color: rgba(255, 0, 0, 0.2);
                }

                .reset-btn:hover {
                    background: linear-gradient(135deg, #ff007f, #ff4e50);
                    box-shadow: 0 8px 20px rgba(255, 0, 127, 0.3);
                    border-color: transparent;
                    transform: translateY(-2px);
                }

                .info-panel {
                    background: rgba(0, 0, 0, 0.2);
                    padding: 30px;
                    border-radius: 15px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .info-heading {
                    color: var(--accent-cyan, #66FCF1);
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                    margin-top: 20px;
                    font-family: var(--font-heading, 'Outfit');
                }

                .info-heading:first-child {
                    margin-top: 0;
                }

                .info-text {
                    color: var(--text-muted, #C5C6C7);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .stepwise-section {
                    margin-top: 40px;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .stepwise-header {
                    font-size: 2rem;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 30px;
                    color: var(--text-main, #FFFFFF);
                    font-family: var(--font-heading, 'Outfit');
                }

                .instructions-panel {
                    background: linear-gradient(135deg, rgba(102, 252, 241, 0.05), rgba(170, 0, 255, 0.05));
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    margin-left: 20px;
                }

                .instructions-panel p {
                    margin-bottom: 10px;
                    color: var(--text-muted, #C5C6C7);
                    display: flex;
                    align-items: center;
                }

                .instructions-panel p::before {
                    content: "•";
                    color: var(--accent-cyan, #66FCF1);
                    font-weight: bold;
                    display: inline-block;
                    width: 1em;
                    margin-left: -1em;
                }
            `}</style>

            <div className="dijkstra-glass-card">
                <h2 className="dijkstra-title">Dijkstra's Algorithm Visualization</h2>
                
                <div className="layout-grid">
                    <div className="canvas-container">
                        <canvas ref={canvasRef} width="600" height="400" className="dijkstra-canvas"></canvas>
                        <div className="controls-row">
                            <button className="action-btn visualize-btn" onClick={visualizeAlgorithm} disabled={visualizeDisabled}>
                                Visualize Algorithm
                            </button>
                            {resetVisible && (
                                <button className="action-btn reset-btn" onClick={reset}>
                                    Reset
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="info-panel">
                        <div className="info-heading">Initialization:</div>
                        <p className="info-text">Set the distance to the source node as 0. Set the distance to all other nodes as ∞ (infinity). Mark all nodes as unvisited.</p>
                        
                        <div className="info-heading">Select the Starting Node:</div>
                        <p className="info-text">Choose the unvisited node with the smallest distance (initially the source node).</p>
                        
                        <div className="info-heading">Update Neighboring Nodes:</div>
                        <p className="info-text">For the selected node, consider all of its unvisited neighboring nodes. For each neighbor, calculate the tentative distance: Tentative Distance = Distance to Current Node + Edge Weight to Neighbor. If the tentative distance is smaller than the currently known distance for that neighbor, update the distance for the neighbor. Mark Node as Visited.</p>
                        
                        <div className="info-heading">Repeat</div>
                        <p className="info-text">Repeat until all nodes have been visited or the destination node has been reached.</p>
                        
                        <div className="info-heading">Termination:</div>
                        <p className="info-text">When all nodes have been visited, or the shortest distance to the destination node is found, the algorithm terminates.</p>
                    </div>
                </div>

                <div className="stepwise-section">
                    <h2 className="stepwise-header">Stepwise Visualization</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <ContentSwitcher />
                        </div>
                        <div className="instructions-panel" style={{ flex: '1 1 300px' }}>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>Legend & Instructions:</h2>
                            <p><strong>A</strong> is Source Node</p>
                            <p><strong>Z</strong> is Destination Node</p>
                            <p>Click <strong>Next</strong> to go forward and <strong>Previous</strong> to go back</p>
                            <p><span style={{color: '#aa00ff', fontWeight: 'bold'}}>Purple</span> nodes are Visited</p>
                            <p><span style={{color: '#66FCF1', fontWeight: 'bold'}}>Cyan</span> nodes and edges indicate Shortest Path</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DijkstraVisualization;
