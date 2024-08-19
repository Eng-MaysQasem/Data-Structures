class HashMap {
    constructor() {
        // Initialize the length of the hashmap and create an array of 16 undefined buckets.
        this.length = 0;
        this.buckets = new Array(16).fill(undefined);
    }

    // Hashes a string to generate an index.
    hash(string) {
        let hashCode = 0;
        const primeNumber = 31;  // Prime number used to reduce collisions.

        // Compute the hash code by iterating through each character of the string.
        for (let i = 0; i < string.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }

        // Return the index by taking the remainder of hash code divided by the number of buckets.
        return hashCode % this.buckets.length;
    }

    // Inserts or updates a key-value pair in the hashmap.
    set(key, value) {
        let index = this.hash(key);

        // If the key already exists, update its value.
        if (this.has(key)) {
            this.buckets[index].value = value;
        } else {
            // If the bucket is occupied, find the next available bucket.
            while (this.buckets[index] !== undefined) {
                index = (index + 1) % this.buckets.length;
            }
            // Insert the new key-value pair.
            this.buckets[index] = { key: key, value: value };

            // Increment the length of the hashmap.
            this.length++;

            // Check if the load factor (0.75) is reached, if so, rehash.
            const loadFactor = 0.75;
            const isLoadFactorReached = this.length / this.buckets.length >= loadFactor;
            if (isLoadFactorReached) {
                this.rehash();
            }
        }
    }

    // Rehashes the hashmap by doubling its size.
    rehash() {
        // Save current buckets.
        const oldBuckets = this.buckets;

        // Create new buckets with double the size.
        this.buckets = new Array(oldBuckets.length * 2).fill(undefined);

        // Reset the length.
        this.length = 0;

        // Re-insert the old key-value pairs into the new larger buckets.
        const oldBucketsKeyValuePairs = oldBuckets.filter((element) => element !== undefined);
        oldBucketsKeyValuePairs.forEach((keyValuePair) => this.set(keyValuePair.key, keyValuePair.value));
    }

    // Retrieves the value associated with a specific key.
    get(key) {
        const index = this.hash(key);
        // If the key exists, return the value, otherwise return null.
        if (this.has(key)) {
            return this.buckets[index].value;
        }
        return null;
    }

    // Checks if a key exists in the hashmap.
    has(key) {
        const index = this.hash(key);
        // Return true if the key exists, false otherwise.
        return this.buckets[index] !== undefined && key === this.buckets[index].key;
    }

    // Clears the hashmap by resetting buckets and length.
    clear() {
        this.buckets = new Array(this.buckets.length).fill(undefined);
        this.length = 0;
    }

    // Removes a key-value pair from the hashmap.
    remove(key) {
        const index = this.hash(key);
        // If the key exists, set its bucket to undefined and decrement the length.
        if (this.has(key)) {
            this.buckets[index] = undefined;
            this.length--;
            return true;  // Return true if the key was removed.
        }
        return false;  // Return false if the key wasn't found.
    }

    // Returns an array of all keys in the hashmap.
    keys() {
        const keys = this.buckets.filter((value) => value !== undefined).map((obj) => obj.key);
        return keys;
    }

    // Returns an array of all values in the hashmap.
    values() {
        const values = this.buckets.filter((value) => value !== undefined).map((obj) => obj.value);
        return values;
    }

    // Returns an array of key-value pairs.
    entries() {
        const entries = this.buckets.filter((value) => value !== undefined).map((obj) => [obj.key, obj.value]);
        return entries;
    }
}
