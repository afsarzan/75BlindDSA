/**
 * Finds the length of the longest substring that contains at most k distinct characters
 * @param s - The input string to search within
 * @param k - The maximum number of distinct characters allowed
 * @returns The length of the longest valid substring
 */
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    // Map to store character frequencies in the current window
    const charFrequencyMap: Map<string, number> = new Map();

    // Left pointer of the sliding window
    let leftPointer: number = 0;

    // Iterate through each character using the right pointer (implicit)
    for (const currentChar of s) {
        // Add current character to the window and update its frequency
        charFrequencyMap.set(currentChar, (charFrequencyMap.get(currentChar) ?? 0) + 1);

        // If we have more than k distinct characters, shrink the window from left
        if (charFrequencyMap.size > k) {
            // Get the character at the left pointer
            const leftChar: string = s[leftPointer];

            // Decrease frequency of the leftmost character
            charFrequencyMap.set(leftChar, charFrequencyMap.get(leftChar)! - 1);

            // Remove character from map if its frequency becomes 0
            if (charFrequencyMap.get(leftChar) === 0) {
                charFrequencyMap.delete(leftChar);
            }

            // Move left pointer to shrink the window
            leftPointer++;
        }
    }

    // Return the length of the valid window (total length - left pointer position)
    return s.length - leftPointer;
}