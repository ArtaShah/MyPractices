def merge_two_lists(a:list,b:list):
    i,j=0,0
    merged=[]
    while i<len(a) and j<len(b):
        if a[i]<b[j]:
            merged.append(a[i])
            i+=1
        else:
            merged.append(b[j])
            j+=1
    merged.extend(a[i:])
    merged.extend(b[j:])
    return merged

def merge_n_sorted_lists(lists):
    if not lists:
        return []
    return divide_and_conquer(lists, 0, len(lists) - 1)

def divide_and_conquer(lists, left, right):
    if left == right:
        return lists[left]
    mid = (left + right) // 2
    left_merged = divide_and_conquer(lists, left, mid)
    right_merged = divide_and_conquer(lists, mid + 1, right)
    return merge_two_lists(left_merged, right_merged)
