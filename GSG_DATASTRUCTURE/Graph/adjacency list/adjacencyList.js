//hash map of array key is vertix value is negibers for key
class Graph {
    constructor() {
        this.list = {};//hash map
    }
    addNode(value) {
        //i want to add to hash key and define empty array for value
        this.list[value] = [];

    }
    addEdge(node1, node2) {
        this.list[node1].push(node2);
        this.list[node2].push(node1);
    }

    DFS(node) {
        // to avoid loops
        var visited = new set();
        //for out put
        var result = [];
        var stack = [node];
        //while stack not empty loop
        while (!stack.length == 0) {
            var current = stack.pop();
            if (!visited.has(current)) {
                visited.add(current);
                result.push(current);
            }
            for(var negibers of this.list[current]){
                if(!visited.has(negibers)){//if negibers in visited we dont add it 
                    stack.push(negibers);
                }
            }

        }
        return result;
    }
    BFS(node) {
        // to avoid loops
        var visited = new set();
        //for out put
        var result = [];
        var Queue= [node];
        //while Queue not empty loop
        while (!Queue.length == 0) {
            var current = Queue.shift();
            if (!visited.has(current)) {
                visited.add(current);
                result.push(current);
            }
            for(var negibers of this.list[current]){
                if(!visited.has(negibers)){//if negibers in visited we dont add it 
                    Queue.push(negibers);
                }
            }

        }
        return result;
    }

    removeEdge(node1, node2) {
        this.list[node1] = this.list[node1].filter(node => node != node2);
        this.list[node2] = this.list[node2].filter(node => node != node1);
    }
    print() {
        for (var key in this.list) {
            console.log(key + "==>" + this.list[key]);
        }
    }
    isNegibers(node1, node2) {
        console.log(this.list[node1].includes(node2));
    }
    CountNegibers(node) {
        console.log(this.list[node].length);
    }
}