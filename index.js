function findMatching(drivers, names) {
    const matchFilter = drivers.filter((name) => {
        if (name.toLowerCase() === names.toLowerCase()) {
            return name
        }
    })
    return matchFilter;
}

function fuzzyMatch(drivers, letters) {
    const fuzzyFilter = drivers.filter((name) => {
        if (name.startsWith(letters)) {
            return name
        }
    })
    return fuzzyFilter;
}

function matchName(drivers, properties) {
    const nameFilter = drivers.filter(drivers => {
        if (drivers.name === properties) {
            return drivers
        }
    })
    return nameFilter;
}