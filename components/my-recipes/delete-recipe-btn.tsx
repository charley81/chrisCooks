import { Button } from '../ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteRecipeAction } from '@/utils/actions'
import { useToast } from '../ui/use-toast'
import { Trash2 } from 'lucide-react'

export default function DeleteRecipeBtn({ id }: { id: string }) {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteRecipeAction(id),
    onSuccess: data => {
      if (!data) {
        toast({
          description: 'there was an error'
        })
        return
      }
      queryClient.invalidateQueries({ queryKey: ['recipes'] })
    }
  })

  return (
    <Button
      size="sm"
      disabled={isPending}
      onClick={() => {
        mutate(id)
      }}
    >
      {isPending ? '...' : <Trash2 />}
    </Button>
  )
}
