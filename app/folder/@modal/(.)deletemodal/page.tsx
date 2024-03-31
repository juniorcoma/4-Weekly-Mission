import EditModal from "@/components/editmodal/EditModal";
import ModalLayout from "@/components/modallayout/ModalLayout";
import { MODAL_TYPE } from "@/constant";

export default function ModalPage() {
  return (
    <ModalLayout>
      <EditModal type={MODAL_TYPE[2]} />
    </ModalLayout>
  );
}
