import { useEffect, useState } from 'react'
import type { Digimon } from '../types/digimon'
import {getDigimon} from '../api/digimon_api'


export function useDigimon(){
    const [digimon, setDigimon] = useState<Digimon[]>([]);
    const [cargar, setCargar] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getDigimon()
        .then(setDigimon)
        .catch((e: Error) => setError(e.message))
        .finally(() => setCargar(false));
    }, []);

    return {digimon,cargar,error}
}