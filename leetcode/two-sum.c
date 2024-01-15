/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = (int*)malloc(2, sizeof(int));

    for (int i = 0; i < numsSize; i++) {

        int num1 = nums[i];

        for (int j = i + 1; j < numsSize; j++) {

            int num2 = nums[j];
            int sum = num1 + num2;
            
            if (sum == target) {
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }

    return NULL;
    
}
