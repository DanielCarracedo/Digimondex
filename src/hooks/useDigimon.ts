import { useEffect, useState } from 'react'
import { getDigimon } from '../api'
import type { Digimon } from '../types/digimon'

export function useDigimon(){
    const [digimon, setDigimon] = useState<Digimon[]>([]);
    const [cargar, setCargar] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getDigimon<Digimon[]>('/Digimon')
        .then(setDigimon)
        .catch((e: Error) => setError(e.message))
        .finally(() => setCargando(false));
    }, []);

    return {digimon,cargar,error}
}