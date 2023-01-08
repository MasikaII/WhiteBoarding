#include <stdio.h>
#include <stdlib.h>

typedef struct treenode
{
    int value;
    struct treenode *left;
    struct treenode *right;

} treenode;

treenode *createnode(int value)
{
    treenode *result = malloc(sizeof(treenode));
    if (result != NULL)
    {
        result->left = NULL;
        result->right = NULL;
        result->value = value;
    }
    return result;
}
// function that prints tabs-> to know the level we are in
void printtabs(int numtabs)
{
    for (int i = 0; i < numtabs; i++)
    {
        printf("\t");
    }
}

// traversing through the tree
void printtree_rec(treenode *root, int level) // level passed in
{
    if (root == NULL)
    {
        printtabs(level);
        printf("--<empty>--\n");
        return;
    }
    printtabs(level);
    printf("value = %d\n", root->value);
    printtabs(level);
    printf("left\n");

    printtree_rec(root->left, level + 1);
    printtabs(level); // recusively
    printf("right\n");

    printtree_rec(root->right, level + 1);

    printtabs(level);
    printf("*done\n");
}

void printtree(treenode *root)
{
    printtree_rec(root, 0);
}

int main()
{
    treenode *n1 = createnode(10);
    treenode *n2 = createnode(11);
    treenode *n3 = createnode(12);
    treenode *n4 = createnode(13);
    treenode *n5 = createnode(14);

    // assigning left or right to the tree.
    n1->left = n2;
    n1->right = n3;
    n3->left = n4;
    n3->right = n5;
    // n2->right = n3;
    // n2->left = n3;

    printtree(n1); // printing tree.

    free(n1);
    free(n2);
    free(n3);
    free(n4);
    free(n5);
    // free(n2);
}
