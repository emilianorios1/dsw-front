import {getBrands} from '@/services/brands';
import {getCarModels} from '@/services/carModels';
import {getCarPublications} from '@/services/carPublications';

import {CarPublicationsDataTable} from './data-table';
import {DialogCarPublicationForm} from './dialog-form';

export default async function Page() {
  const models = await getCarModels();
  const brands = await getBrands();
  const publications = await getCarPublications();

  return (
    <div className="container mt-10 flex flex-col justify-center space-y-6 text-center">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold sm:text-6xl"> Car Publications</h1>

        <DialogCarPublicationForm models={models} brands={brands} />
      </div>

      <div className="flex justify-center">
        <CarPublicationsDataTable
          publications={publications}
          models={models}
          brands={brands}
        />
      </div>
    </div>
  );
}
