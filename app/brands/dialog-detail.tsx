import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Brand } from "@/interfaces/backend-interfaces"; // Asegúrate de importar la interfaz correcta
import { useRouter } from "next/navigation";

export function DialogBrandDetail({ brand }: { brand: Brand }) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">View Detail</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{brand.name}</DialogTitle>
          <DialogDescription>
            Name: {brand.name}<br/>
            Website URL: {brand.websiteUrl}<br/>
            Contact Number: {brand.contactNumber}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
