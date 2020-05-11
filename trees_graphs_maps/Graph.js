class Graph{
    constructor(){
        this.vertices = {};
    }

    addVertex(value){
        if(!this.vertices[value]){
            this.vertices[value] = [];
        }

        return this.vertices
    }

    removeVertex(vertex){
        for(let key in this.vertices){
            if(this.vertices[key].includes(vertex)){
                this.removeEdge(vertex, key);
            }
        }
        delete this.vertices[vertex];
    }

    addEdge(vertex1, vertex2){
        // an edge connects two vertics together
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        let index1, index2;
        if(this.vertices[vertex1] && this.vertices[vertex2]){
            index1 = this.vertices[vertex1].indexOf(vertex2);
            index2 = this.vertices[vertex2].indexOf(vertex1);

            this.vertices[vertex1].splice(index2, 1);
            this.vertices[vertex2].splice(index1, 1);
        }
    }

    DFSRecursive(vertex){
       let results = [];
       let visited = {};
       let vertices = this.vertices;

       (function DFS(aVertex){
           if(!aVertex){
                // return something
                return null;
           }
           
//            console.log(vertices[aVertex]);
            visited[aVertex] = true;
           results.push(aVertex);
          
//            for(let node of vertices[aVertex]){
//                console.log(node);
//                if(!visited[node]) return DFS(node);
//            }

            vertices[aVertex].forEach(neighbor => {
                console.log(neighbor);
                if(!visited[neighbor]) return DFS(neighbor);
            });

       })(vertex);

       return results;
        
    }
}


let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");