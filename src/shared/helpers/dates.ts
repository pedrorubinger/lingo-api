interface EntityDateProps {
  createdAt: Date
  updatedAt: Date
}

export const createEntityDateProps = (): EntityDateProps => {
  const now = new Date()

  return { createdAt: now, updatedAt: now }
}
