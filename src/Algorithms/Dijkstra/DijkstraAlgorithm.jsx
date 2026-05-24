import CodeCopy from '../../Components/Codecopy';

const DijkstraConcept = () => {
const headingStyle = {
        marginTop: '0',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginBottom: '15px',
    };
 const subHeadingStyle = {
        mmarginTop: '20px',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        marginTop: '10px',
    };
const listStyle = { 
        fontWeight: 400,
        lineHeight: '1.6',            
        marginBottom: '8px',          
        color: 'var(--text-main, #FFFFFF)',                        
        paddingLeft: '20px',          
    };
const content={
        marginLeft: '20px',
        padding: '20px',
        fontSize: '18px'
  };
const para={
    fontWeight: '400'
};
    const codeSnippet = ` 
#include <stdio.h>
#include <limits.h>
#include <stdbool.h>

#define V 9  // Number of vertices in the graph

// Function to find the vertex with the shortest distance from the source
int findMinDistance(int dist[], bool visited[]) {
    int min = INT_MAX, min_index;

    for (int v = 0; v < V; v++) {
        if (!visited[v] && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }

    return min_index;
}

// Function to print the solution, i.e., the shortest distance from the source
void printSolution(int dist[]) {
    printf("Vertex \t\t Distance from Source \n");
    for (int i = 0; i < V; i++) {
        printf("%d \t \t %d\n", i, dist[i]);
    }
}

// Implementation of Dijkstra's algorithm for a graph represented using an adjacency matrix
void dijkstra(int graph[V][V], int src) {
    int dist[V];     // Array to store the shortest distance from the source to each vertex
    bool visited[V]; // Array to keep track of visited vertices

    // Step 1: Initialize distances as infinity and visited[] as false
    for (int i = 0; i < V; i++) {
        dist[i] = INT_MAX;  // Set all distances to infinity
        visited[i] = false; // Mark all vertices as unvisited
    }

    dist[src] = 0; // Set the distance of the source vertex to itself as 0

    // Step 2: Process each vertex one by one
    for (int count = 0; count < V - 1; count++) {
        // Step 3: Choose the unvisited vertex with the shortest distance
        int u = findMinDistance(dist, visited);

        // Step 4: Mark the picked vertex as visited
        visited[u] = true;

        // Step 5: Update the distance value for each unvisited neighbor of the current vertex
        for (int v = 0; v < V; v++) {
            // Update dist[v] if:
            // - It's not visited
            // - There is an edge from u to v
            // - Total weight of the path from source to v through u is smaller than the current value of dist[v]
            if (!visited[v] && graph[u][v] && dist[u] != INT_MAX && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    // Step 6: Print the final distances from the source vertex to all other vertices
    printSolution(dist);
}

// Main function to test Dijkstra's algorithm
int main() {
    // Sample graph represented as an adjacency matrix
    int graph[V][V] = {
        {0, 4, 0, 0, 0, 0, 0, 8, 0},
        {4, 0, 8, 0, 0, 0, 0, 11, 0},
        {0, 8, 0, 7, 0, 4, 0, 0, 2},
        {0, 0, 7, 0, 9, 14, 0, 0, 0},
        {0, 0, 0, 9, 0, 10, 0, 0, 0},
        {0, 0, 4, 14, 10, 0, 2, 0, 0},
        {0, 0, 0, 0, 0, 2, 0, 1, 6},
        {8, 11, 0, 0, 0, 0, 1, 0, 7},
        {0, 0, 2, 0, 0, 0, 6, 7, 0}
    };

    // Run Dijkstra's algorithm with vertex 0 as the source
    dijkstra(graph, 0);

    return 0;
}

    `

    return (
        <div style={content}>
            <h1 style={headingStyle}>Dijkstra Algorithm</h1>
                <ul style={listStyle}>
                    <li><span style={{fontWeight:'bold'}}>Step 1: </span>Set initial distances for all vertices: 0 for the source vertex, and infinity for all the other.</li>
                    <li><span style={{fontWeight:'bold'}}>Step 2: </span>Choose the unvisited vertex with the shortest distance from the start to be the current vertex. So the algorithm will always start with the source as the current vertex.</li>
                    <li><span style={{fontWeight:'bold'}}>Step 3: </span>For each of the current vertexs unvisited neighbor vertices, calculate the distance from the source and update the distance if the new, calculated, distance is lower.</li>
                    <li><span style={{fontWeight:'bold'}}>Step 4: </span>We are now done with the current vertex, so we mark it as visited. A visited vertex is not checked again.</li>
                    <li><span style={{fontWeight:'bold'}}>Step 5: </span>Go back to step 2 to choose a new current vertex, and keep repeating these steps until all vertices are visited.</li>
                    <li><span style={{fontWeight:'bold'}}>Step 6: </span>In the end we are left with the shortest path from the source vertex to every other vertex in the graph.</li>
                </ul>
            <h2 style={subHeadingStyle}>Code:</h2>
            <CodeCopy code={codeSnippet} />
            <h2 style={headingStyle}>Time Complexity for Dijkstra,s Algorithm</h2>
            <h2 style={subHeadingStyle}>V as the number of vertices in our graph, the time complexity for Dijkstras algorithm is O(V^2)</h2>
            <p style={para}>The reason why we get this time complexity is that the vertex with the lowest distance must to be search for to choose the next current vertex, and that takes O(V)time. And since this must to be done for every vertex connected to the source, we need to factor that in, and so we get time complexity O(V2)for Dijkstras algorithm.
                            By using a Min-heap or Fibonacci-heap data structure for the distances instead (not yet explained in this tutorial), the time needed to search for the minimum distance vertex is reduced from O(V) to O(logV), which results in an improved time complexity for Dijkstras algorithm <span style={{fontWeight:'bolder'}}>O(V⋅logV+E)</span></p>
        </div>
    );
}

export default DijkstraConcept;
